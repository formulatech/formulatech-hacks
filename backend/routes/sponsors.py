from flask import Blueprint, current_app, request

from backend.utils.responses import err, ok

bp = Blueprint("sponsors", __name__, url_prefix="/sponsors")


@bp.get("")
def list_sponsors():
    store = current_app.extensions["store"]
    return ok({"sponsors": store.list_sponsors()})


@bp.post("")
def upsert_sponsor():
    payload = request.get_json(silent=True) or {}
    name = str(payload.get("name", "")).strip()
    tier = int(payload.get("tier", 3))

    if not name:
        return err("Sponsor name required", code="missing_name")

    store = current_app.extensions["store"]
    record = store.upsert_sponsor(
        {
            "id": payload.get("id"),
            "name": name,
            "tier": tier,
            "logo_url": payload.get("logo_url"),
        }
    )
    return ok({"sponsor": record}, status=201)
