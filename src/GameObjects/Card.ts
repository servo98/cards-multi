import { GameObjects, Scene } from "phaser";

export default class Card extends GameObjects.Image {
  constructor(
    scene: Scene,
    x: number,
    y: number,
    texture: string,
    frame: number
  ) {
    super(scene, x, y, texture, frame);
    scene.add.existing(this);

    this.setInteractive({ draggable: true });
    this.on("dragstart", () => {
      this.scene.children.bringToTop(this);
      this.setScale(1.1);
    });

    this.on(
      "drag",
      (_pointer: Phaser.Input.Pointer, dragX: number, dragY: number) => {
        this.setPosition(dragX, dragY);
      }
    );

    this.on("dragend", () => {
      this.setScale(1);
    });
  }
}
