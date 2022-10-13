export const copyrightAdapter = (globalProperties, key) => {
  if (globalProperties?.data.length > 0) {
    const matches = globalProperties?.data.filter(
      (gb) => gb.attributes["key"] === key
    );
    if (matches.length > 0) {
      return matches[0].attributes["value"];
    }
  }
  return "";
};

export const logoAdapter = (globalProperties, key) => {
    const logo = globalProperties?.data;
    if(logo.length > 0) {
        const logoData = logo[1].attributes?.value;
        if(logoData.length > 0) {
            return logoData;
        }
    }
    return ""
  };
