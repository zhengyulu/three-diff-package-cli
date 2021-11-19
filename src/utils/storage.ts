export const initLocalStorage = (): void => {
  let buCode = getLocalStorageData('BU-Code');
  if (buCode === 'zh') {
    buCode = 'cn'
    saveToLocalStorage('BU-Code', buCode)
  }
  if (!localStorage.getItem('DEFAULT_LANGUAGE')) {
    localStorage.setItem(
      'DEFAULT_LANGUAGE',
      JSON.stringify({
        'BU-Code': buCode === 'zh' ? 'cn' : buCode,
        I18N_LANG: getLocalStorageData('I18N_LANG'),
        languageId: getLocalStorageData('languageId')
      })
    )
  } else {
    const lanJSON = localStorage.getItem('DEFAULT_LANGUAGE')
    if (lanJSON !== null) {
      const defaultLan = JSON.parse(lanJSON)
      defaultLan['BU-Code'] = buCode
      localStorage.setItem('DEFAULT_LANGUAGE', JSON.stringify(defaultLan))
    }
  }
}

export const saveToLocalStorage = (key: string, value: unknown): void => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getLocalStorageData = (key: string): any => {
  return JSON.parse(localStorage.getItem(key) || '')
}

export const saveToSessionStorage = (key : string, value: unknown): void => {
  sessionStorage.setItem(key, JSON.stringify(value))
}

export const getSessionStorageData = (key: string): any => {
  return JSON.parse(sessionStorage.getItem(key) || '')
}

export const resetI18N = (): void => {
  const lanJSON = localStorage.getItem('DEFAULT_LANGUAGE')
  if (lanJSON !== null) {
    const defaultLan = JSON.parse(lanJSON)
    saveToLocalStorage('I18N_LANG', defaultLan.I18N_LANG)
    saveToLocalStorage('languageId', defaultLan.languageId)
  }
}

initLocalStorage()
