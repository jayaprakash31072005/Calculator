function convertArea() {
  const inputAreaInput = document.getElementById("inputArea");
  const inputUnitSelect = document.getElementById("inputUnit");
  const outputUnitSelect = document.getElementById("outputUnit");

  const inputArea = Number(inputAreaInput.value);
  const inputUnit = inputUnitSelect.value;
  const outputUnit = outputUnitSelect.value;

  const convertedArea = convert(inputArea, inputUnit, outputUnit);

  const convertedAreaSpan = document.getElementById("convertedArea");
  convertedAreaSpan.textContent = convertedArea;
}

function convert(area, inputUnit, outputUnit) {
  switch (inputUnit) {
    case "sqft":
      return convertFromSqft(area, outputUnit);
    case "acre":
      return convertFromAcre(area, outputUnit);
    case "gunta":
      return convertFromGunta(area, outputUnit);
    case "sqcm":
      return convertFromSqcm(area, outputUnit);
    case "sqinch":
      return convertFromSqinch(area, outputUnit);
    case "sqkm":
      return convertFromSqkm(area, outputUnit);
    case "sqm":
      return convertFromSqm(area, outputUnit);
    case "sqmile":
      return convertFromSqmile(area, outputUnit);
    case "sqyard":
      return convertFromSqyard(area, outputUnit);
    case "hectare":
      return convertFromHectare(area, outputUnit);
    default:
      return 0;
  }
}

function convertFromSqft(area, outputUnit) {
  switch (outputUnit) {
    case "sqft":
      return area;
    case "acre":
      return area / 43560;
    case "gunta":
      return area / 1089;
    case "sqcm":
      return area * 929.0304;
    case "sqinch":
      return area * 144;
    case "sqkm":
      return area / 10763910.42;
    case "sqm":
      return area / 10.76391042;
    case "sqmile":
      return area / 27878400;
    case "sqyard":
      return area / 9;
    case "hectare":
      return area / 107639;
    default:
      return 0;
  }
}

function convertFromAcre(area, outputUnit) {
  switch (outputUnit) {
    case "sqft":
      return area * 43560;
    case "acre":
      return area;
    case "gunta":
      return area * 40;
    case "sqcm":
      return area * 40468564.224;
    case "sqinch":
      return area * 6272640;
    case "sqkm":
      return area / 247.105381;
    case "sqm":
      return area * 4046.856422;
    case "sqmile":
      return area / 640;
    case "sqyard":
      return area * 4840;
    case "hectare":
      return area * 0.404685642;
    default:
      return 0;
  }
}

function convertFromSqcm(area, outputUnit) {
  switch (outputUnit) {
    case "sqft":
      return area * 0.00107639;
    case "acre":
      return area * 0.000000024711;
    case "gunta":
      return area * 0.00000001089;
    case "sqcm":
      return area;
    case "sqinch":
      return area * 0.15500031;
    case "sqkm":
      return area * 0.0000001;
    case "sqm":
      return area * 0.0001;
    case "sqmile":
      return area * 0.00000003861;
    case "sqyard":
      return area * 0.0001196;
    case "hectare":
      return area * 0.00000001;
    default:
      return 0;
  }
}

function convertFromSqinch(area, outputUnit) {
  switch (outputUnit) {
    case "sqft":
      return area * 0.00694444;
    case "acre":
      return area * 0.00000015942;
    case "gunta":
      return area * 0.00000007056;
    case "sqcm":
      return area * 6.4516;
    case "sqinch":
      return area;
    case "sqkm":
      return area * 0.00000000064516;
    case "sqm":
      return area * 0.00064516;
    case "sqmile":
      return area * 0.0000000002490976;
    case "sqyard":
      return area * 0.000771605;
    case "hectare":
      return area * 0.000000000064516;
    default:
      return 0;
  }
}

function convertFromSqkm(area, outputUnit) {
  switch (outputUnit) {
    case "sqft":
      return area * 10763910.41671;
    case "acre":
      return area * 247.10538147;
    case "gunta":
      return area * 10890000;
    case "sqcm":
      return area * 10000000000;
    case "sqinch":
      return area * 1550003100.0062;
    case "sqkm":
      return area;
    case "sqm":
      return area * 1000000;
    case "sqmile":
      return area * 0.3861021585;
    case "sqyard":
      return area * 1195990.0463011;
    case "hectare":
      return area * 100;
    default:
      return 0;
  }
}

function convertFromSqm(area, outputUnit) {
  switch (outputUnit) {
    case "sqft":
      return area * 10.76391041671;
    case "acre":
      return area * 0.0002471054;
    case "gunta":
      return area * 0.0001089;
    case "sqcm":
      return area * 10000;
    case "sqinch":
      return area * 1550.0031000062;
    case "sqkm":
      return area * 0.000001;
    case "sqm":
      return area;
    case "sqmile":
      return area * 0.00000038610215854245;
    case "sqyard":
      return area * 1.1959900463011;
    case "hectare":
      return area * 0.0001;
    default:
      return 0;
  }
}

function convertFromSqmile(area, outputUnit) {
  switch (outputUnit) {
    case "sqft":
      return area * 27878400;
    case "acre":
      return area * 640;
    case "gunta":
      return area * 27878400 * 40;
    case "sqcm":
      return area * 4046856422.4;
    case "sqinch":
      return area * 627264000;
    case "sqkm":
      return area * 2.58998811;
    case "sqm":
      return area * 2590000.006;
    case "sqmile":
      return area;
    case "sqyard":
      return area * 3097600;
    case "hectare":
      return area * 259;
    default:
      return 0;
  }
}

function convertFromSqyard(area, outputUnit) {
  switch (outputUnit) {
    case "sqft":
      return area * 9;
    case "acre":
      return area * 0.0002066116;
    case "gunta":
      return area * 0.000090625;
    case "sqcm":
      return area * 8361.2736;
    case "sqinch":
      return area * 1296;
    case "sqkm":
      return area * 0.00000083612736;
    case "sqm":
      return area * 0.83612736;
    case "sqmile":
      return area * 0.0000003228305785124;
    case "sqyard":
      return area;
    case "hectare":
      return area * 0.000083612736;
    default:
      return 0;
  }
}

function convertFromHectare(area, outputUnit) {
  switch (outputUnit) {
    case "sqft":
      return area * 107639.1041671;
    case "acre":
      return area * 2.4710538147;
    case "gunta":
      return area * 10890;
    case "sqcm":
      return area * 100000000;
    case "sqinch":
      return area * 15500031;
    case "sqkm":
      return area * 0.01;
    case "sqm":
      return area * 10000;
    case "sqmile":
      return area * 0.0038610215854245;
    case "sqyard":
      return area * 11959.900463011;
    case "hectare":
      return area;
    default:
      return 0;
  }
}
