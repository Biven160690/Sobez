import createElement from "../../assets/lib/create-element.js";

export default class ProductCard {
  constructor(product) {
    this.name = product.name;
    this.price = product.price.toFixed(2);
    this.category = product.category;
    this.image = product.image;
    this.id = product.id;
    this.divCard = document.createElement("div");
    this.divCard.className = "card";
    this.divCardTop = document.createElement("div");
    this.divCardTop.className = "card_top";
    this.divCardTop.insertAdjacentHTML(
      "afterbegin",
      `<img src="/jsbasic-20210520_6316600/assets/images/products/${this.image}" class="card__image" alt="product"> <span class="card__price">€${this.price}</span>`
    );
    this.divCard.append(this.divCardTop);
    this.divCardBody = document.createElement("div");
    this.divCardBody.className = "card__body";
    this.divCardBody.insertAdjacentHTML(
      "afterbegin",
      `<div class="card__title">${this.name}</div> <button type="button" class="card__button"></button><img src="/jsbasic-20210520_6316600/assets/images/icons/plus-icon.svg" alt="icon">
    </button>`
    );
    this.divCard.append(this.divCardBody);
    this.elem = this.divCard;
  }
}
