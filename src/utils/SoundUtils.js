const mapNormalisedToHumanHearing = input => {
  return 18000 - ((input - 0) * (18000 - 80) / (1 - 0) + 80);
};

export { mapNormalisedToHumanHearing };
