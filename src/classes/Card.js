export const filter = {todos: true, c: false, python: false, web: false}

export default class Card {
  #tools;
  #id;
  constructor(id, title, imageSrc, altText, cardColor, description, link, tools) {
    this.#id = id;
    this.title = title;
    this.imageSrc = imageSrc;
    this.altText = altText;
    this.cardColor = cardColor;
    this.description = description;
    this.link = link;
    this.#tools = this.#map_tools(tools);
  }

  #map_tools (tools) {
    const toolsObj = {...filter}
    for (let t of tools) {
      if (t in toolsObj) toolsObj[t] = true;
    }
    return toolsObj;
  }

  get tools() {
    return {...this.#tools};
  }

  get id() {
    return this.#id;
  }
}