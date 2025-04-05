from flask import Flask, Response, jsonify

app = Flask(__name__)
name = "FormulaTech-Hacks"
mode: str = "Debug" if app.debug else "Production"


@app.route("/")
def root() -> Response:
    return jsonify({"mode": mode, "name": name})
