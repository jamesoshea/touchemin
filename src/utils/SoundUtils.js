const mapNormalisedToHumanHearing = input => {
  return (input - 0) * (18000 - 80) / (1 - 0) + 80;
};

export { mapNormalisedToHumanHearing };
