from __future__ import annotations

import secrets
import threading
from typing import Any


class Store:
    def __init__(self) -> None:
        self._lock = threading.RLock()
        self._users: dict[str, dict[str, Any]] = {}
        self._registrations: dict[str, dict[str, Any]] = {}
        self._teams: dict[str, dict[str, Any]] = {}
        self._sponsors: dict[str, dict[str, Any]] = {}

    def new_id(self, prefix: str) -> str:
        return f"{prefix}_{secrets.token_hex(8)}"

    def list_users(self) -> list[dict[str, Any]]:
        with self._lock:
            return [self._public_user(u) for u in self._users.values()]

    def get_user_by_email(self, email: str) -> dict[str, Any] | None:
        with self._lock:
            for user in self._users.values():
                if user["email"] == email.lower():
                    return user
        return None

    def create_user(self, email: str, name: str, password_hash: str) -> dict[str, Any]:
        with self._lock:
            user_id = self.new_id("usr")
            record = {
                "id": user_id,
                "email": email.lower(),
                "name": name,
                "password_hash": password_hash,
            }
            self._users[user_id] = record
            return self._public_user(record)

    def list_registrations(self) -> list[dict[str, Any]]:
        with self._lock:
            return list(self._registrations.values())

    def create_registration(self, payload: dict[str, Any]) -> dict[str, Any]:
        with self._lock:
            reg_id = self.new_id("reg")
            record = {"id": reg_id, **payload}
            self._registrations[reg_id] = record
            return record

    def list_teams(self) -> list[dict[str, Any]]:
        with self._lock:
            return list(self._teams.values())

    def get_team(self, team_id: str) -> dict[str, Any] | None:
        with self._lock:
            return self._teams.get(team_id)

    def create_team(self, payload: dict[str, Any]) -> dict[str, Any]:
        with self._lock:
            team_id = self.new_id("team")
            record = {"id": team_id, **payload}
            self._teams[team_id] = record
            return record

    def list_sponsors(self) -> list[dict[str, Any]]:
        with self._lock:
            return sorted(self._sponsors.values(), key=lambda s: s.get("tier", 99))

    def upsert_sponsor(self, payload: dict[str, Any]) -> dict[str, Any]:
        with self._lock:
            sponsor_id = payload.get("id") or self.new_id("spn")
            record = {"id": sponsor_id, **payload}
            self._sponsors[sponsor_id] = record
            return record

    def bulk_load(self, data: dict[str, list[dict[str, Any]]]) -> None:
        with self._lock:
            for user in data.get("users", []):
                self._users[user["id"]] = user
            for reg in data.get("registrations", []):
                self._registrations[reg["id"]] = reg
            for team in data.get("teams", []):
                self._teams[team["id"]] = team
            for sponsor in data.get("sponsors", []):
                self._sponsors[sponsor["id"]] = sponsor

    def public_user(self, user: dict[str, Any]) -> dict[str, Any]:
        return {"id": user["id"], "email": user["email"], "name": user["name"]}

    @staticmethod
    def _public_user(user: dict[str, Any]) -> dict[str, Any]:
        return {"id": user["id"], "email": user["email"], "name": user["name"]}
