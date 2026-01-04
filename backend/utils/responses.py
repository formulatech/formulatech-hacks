from typing import Any

from flask import jsonify


def ok(data: Any | None = None, *, status: int = 200):
    body: dict[str, Any] = {"ok": True}
    if data is not None:
        body["data"] = data
    return jsonify(body), status


def err(message: str, *, status: int = 400, code: str | None = None):
    body: dict[str, Any] = {"ok": False, "error": message}
    if code:
        body["code"] = code
    return jsonify(body), status
