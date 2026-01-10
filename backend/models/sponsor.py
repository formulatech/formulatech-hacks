from dataclasses import dataclass


@dataclass(slots=True)
class Sponsor:
    id: str
    name: str
    tier: int
    logo_url: str | None = None

    def to_dict(self) -> dict[str, str | int | None]:
        return {
            "id": self.id,
            "name": self.name,
            "tier": self.tier,
            "logo_url": self.logo_url,
        }
