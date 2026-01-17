from flask import Blueprint, current_app, request

from backend.utils.responses import err, ok

bp = Blueprint("teams", __name__, url_prefix="/teams")


@bp.get("")
def list_teams():
    store = current_app.extensions["store"]
    return ok({"teams": store.list_teams()})


@bp.get("/<team_id>")
def get_team(team_id: str):
    store = current_app.extensions["store"]
    team = store.get_team(team_id)
    if not team:
        return err("Team not found", status=404, code="not_found")
    return ok({"team": team})


@bp.post("")
def create_team():
    payload = request.get_json(silent=True) or {}
    name = str(payload.get("name", "")).strip()
    member_count = int(payload.get("member_count", 1))

    if not name:
        return err("Team name required", code="missing_name")
    if member_count < 1 or member_count > 4:
        return err("Invalid team size", code="invalid_size")

    store = current_app.extensions["store"]
    record = store.create_team({"name": name, "member_count": member_count})
    return ok({"team": record}, status=201)
