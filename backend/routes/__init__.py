from flask import Blueprint, Flask

from backend.routes.auth import bp as auth_bp
from backend.routes.health import bp as health_bp
from backend.routes.registrations import bp as registrations_bp
from backend.routes.sponsors import bp as sponsors_bp
from backend.routes.teams import bp as teams_bp


def register_blueprints(app: Flask, api_prefix: str) -> None:
    api = Blueprint("api", __name__, url_prefix=api_prefix)
    api.register_blueprint(health_bp)
    api.register_blueprint(auth_bp)
    api.register_blueprint(registrations_bp)
    api.register_blueprint(teams_bp)
    api.register_blueprint(sponsors_bp)
    app.register_blueprint(api)
