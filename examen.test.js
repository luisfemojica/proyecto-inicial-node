const { suma } = require("./examen");

describe("Prueba en suma", () => {
  test("El resultado es 3", () => {
    expect(suma(1, 2)).toBe(3);
  });
});
