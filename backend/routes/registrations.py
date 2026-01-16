from flask import Blueprint, current_app, request

from backend.utils.responses import err, ok
from backend.utils.validators import is_valid_email

bp = Blueprint("registrations", __name__, url_prefix="/registrations")


@bp.get("")
def list_registrations():
    store = current_app.extensions["store"]
    return ok({"registrations": store.list_registrations()})


@bp.post("")
def create_registration():
    payload = request.get_json(silent=True) or {}
    email = str(payload.get("email", "")).strip()
    track = str(payload.get("track", "general")).strip()

    if not is_valid_email(email):
        return err("Invalid email", code="invalid_email")

    store = current_app.extensions["store"]
    record = store.create_registration(
        {
            "email": email.lower(),
            "track": track,
            "dietary": payload.get("dietary"),
        }
    )
    return ok({"registration": record}, status=201)
