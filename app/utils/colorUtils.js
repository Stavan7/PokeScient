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
      return '#ffffff';
  }
};

export const getBackgroundColor = type => {
  switch (type) {
    case 'fire':
      return '#FFBD8E';
    case 'normal':
      return '#D1D094';
    case 'fighting':
      return '#EF7B74';
    case 'water':
      return '#9FBBFD';
    case 'flying':
      return '#CBBDF8';
    case 'grass':
      return '#A9DB90';
    case 'poison':
      return '#D685D6';
    case 'electric':
      return '#FDE99C';
    case 'ground':
      return '#FFEAB1';
    case 'psychic':
      return '#EF9DB5';
    case 'rock':
      return '#DFD299';
    case 'ice':
      return '#CDF6F6';
    case 'bug':
      return '#DAE673';
    case 'dragon':
      return '#BCA0FF';
    case 'ghost':
      return '#AD89E8';
    case 'dark':
      return '#B89277';
    case 'steel':
      return '#E4E6FF';
    case 'fairy':
      return '#FFC5D3';
    default:
      return '#FFFFFF';
  }
};
