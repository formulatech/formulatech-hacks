import json
from pathlib import Path

from backend.factory import create_app

SEED_PATH = Path(__file__).resolve().parents[1] / "data" / "seed.json"


def main() -> None:
    app = create_app()
    with app.app_context():
        store = app.extensions["store"]
        payload = json.loads(SEED_PATH.read_text(encoding="utf-8"))
        store.bulk_load(payload)
        print(f"Loaded seed from {SEED_PATH}")


if __name__ == "__main__":
    main()
