import { Scene } from "phaser";
import Card from "../GameObjects/Card";

export class Game extends Scene {
  constructor() {
    super("Game");
  }

  preload() {
    this.load.spritesheet("cards", "assets/cards.png", {
      frameWidth: 100,
      frameHeight: 128,
    });
    // this.load.image("card1", "cards.png");
  }

  create() {
    const totalFrameCards = this.textures.get("cards");

    const cards: Card[] = [];
    for (let i = 0; i < totalFrameCards.frameTotal; i++) {
      const card = new Card(this, 100 * i, 300, "cards", i);
      cards.push(card);
    }

    // const card1 = new Card(this, 100 * 2, 300, "cards", 0);
  }
}
