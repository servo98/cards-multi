import { Scene } from "phaser";
import Card from "../GameObjects/Card";

export class Game extends Scene {
  constructor() {
    super("Game");
  }

  preload() {
    this.load.image("card1", "path/to/card1.png");
    this.load.image("card2", "path/to/card2.png");
    // this.load.image("background", "path/to/background.png");
  }

  create() {
    // Fondo
    // this.add.image(400, 300, "background");

    // Crear cartas usando la clase personalizada
    const card1 = new Card(this, 200, 300, "card1");
    const card2 = new Card(this, 400, 300, "card2");
  }
}
