import hashlib

from flask import Blueprint, current_app, request

from backend.utils.responses import err, ok
from backend.utils.validators import is_valid_email, is_valid_password

bp = Blueprint("auth", __name__, url_prefix="/auth")


def _hash_password(password: str) -> str:
    return hashlib.sha256(password.encode("utf-8")).hexdigest()


@bp.post("/signup")
def signup():
    payload = request.get_json(silent=True) or {}
    email = str(payload.get("email", "")).strip()
    name = str(payload.get("name", "")).strip()
    password = str(payload.get("password", ""))

    if not is_valid_email(email):
        return err("Invalid email", code="invalid_email")
    if not is_valid_password(password):
        return err("Password too short", code="weak_password")
    if not name:
        return err("Name required", code="missing_name")

    store = current_app.extensions["store"]
    if store.get_user_by_email(email):
        return err("Email already registered", status=409, code="email_taken")

    user = store.create_user(email, name, _hash_password(password))
    return ok({"user": user}, status=201)


@bp.post("/signin")
def signin():
    payload = request.get_json(silent=True) or {}
    email = str(payload.get("email", "")).strip()
    password = str(payload.get("password", ""))

    store = current_app.extensions["store"]
    user = store.get_user_by_email(email)
    if not user or user["password_hash"] != _hash_password(password):
        return err("Invalid credentials", status=401, code="invalid_credentials")

    return ok({"user": store.public_user(user)})
