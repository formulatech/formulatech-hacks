from dataclasses import dataclass


@dataclass(slots=True)
class Registration:
    id: str
    email: str
    track: str
    dietary: str | None = None

    def to_dict(self) -> dict[str, str | None]:
        return {
            "id": self.id,
            "email": self.email,
            "track": self.track,
            "dietary": self.dietary,
        }
