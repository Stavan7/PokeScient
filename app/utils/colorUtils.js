export const getTypeColor = type => {
  switch (type) {
    case 'fire':
      return '#f08131';
    case 'normal':
      return '#a9a879';
    case 'fighting':
      return '#c03028';
    case 'water':
      return '#6891f1';
    case 'flying':
      return '#a891f1';
    case 'grass':
      return '#78c850';
    case 'poison':
      return '#a040a0';
    case 'electric':
      return '#f9d031';
    case 'ground':
      return '#e0c068';
    case 'psychic':
      return '#f85888';
    case 'rock':
      return '#b8a139';
    case 'ice':
      return '#98d8d8';
    case 'bug':
      return '#a9b920';
    case 'dragon':
      return '#7139f8';
    case 'ghost':
      return '#715998';
    case 'dark':
      return '#715948';
    case 'steel':
      return '#b8b9d1';
    case 'fairy':
      return '#ef98ac';
    default:
      return '#ffffff'; // Default background color if type is not recognized
  }
};
