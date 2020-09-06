import _ from "lodash";
import idGenerator from "./javascript/idGenerator";

export interface Entity<T> {
  readonly id: T;
  readonly name: string;
}

export interface Product extends Entity<string> {
  readonly variants: Variant[];
}

export interface Variant extends Entity<string> {
  readonly color: string;
  readonly size: Size;
  readonly price: Price;
}

export type Price = {
  readonly amount: number;
  readonly currency: Currency;
}

export enum Currency {
  EURO = "EURO",
  DOLLAR = "DOLLAR",
}

export enum Size {
  XS = "XS",
  S = "S",
  M = "M",
  L = "L",
  XL = "XL"
}

export class DummyDataGenerator {
  private brands = ["Nike", "Adidas", "Puma", "Spalding"]
  private colors = ["white", "black", "red"]
  private sizes = [Size.S, Size.M, Size.L, Size.XL]

  public generateProducts(numberOfProducts: number, maxNumberOfVariants: number = 5): Product[] {
    return _.times(numberOfProducts, (): Product => {
      const brandsIndex = _.random(0, this.brands.length - 1);
      const numberOfVariants = _.random(1, maxNumberOfVariants);
      return {
        id: idGenerator(),
        name: `${this.brands[brandsIndex]}'s T-Shirt`,
        variants: _.times(numberOfVariants, () => this.generateVariant(this.brands[brandsIndex]))
      }
    });
  }

  private generateVariant(brand: String): Variant {
    const sizeIndex = _.random(0, this.sizes.length - 1);
    const colorIndex = _.random(0, this.colors.length - 1);

    const size = this.sizes[sizeIndex];
    const color = this.colors[colorIndex];

    return {
      id: idGenerator(),
      name: `${brand}'s ${color} t-shirt in size ${size}`,
      size: size,
      color: color,
      price: {
        amount: 19.99,
        currency: Currency.EURO,
      },
    };
  }
}
