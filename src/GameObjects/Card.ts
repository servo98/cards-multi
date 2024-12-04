import { GameObjects, Scene } from "phaser";

export default class Card extends GameObjects.Image {
  constructor(scene: Scene, x: number, y: number, texture: string) {
    super(scene, x, y, texture);

    // Añadir la carta a la escena
    scene.add.existing(this);

    // Hacerla interactiva
    this.setInteractive({ draggable: true });

    // Configurar eventos para arrastrar
    // this.scene.input.setDraggable(this);

    // Evento al empezar a arrastrar
    this.on("dragstart", () => {
      this.setScale(1.1); // Agrandar la carta al arrastrarla
    });

    // Evento mientras se arrastra
    this.on(
      "drag",
      (pointer: Phaser.Input.Pointer, dragX: number, dragY: number) => {
        this.setPosition(dragX, dragY); // Actualizar posición
      }
    );

    // Evento al soltar
    this.on("dragend", () => {
      this.setScale(1); // Restaurar tamaño original
    });
  }
}
