import { type ConfigProviderProps, type ThemeConfig } from 'antd'

export const tokenGuidelines = {
  G100: '#EAFBF8',
  G200: '#C0F2EA',
  G300: '#7AEBD9',
  G400: '#30DFC4',
  G500: '#26B29D',
  G600: '#1F9382',
  G700: '#1B7E6F',
  G800: '#16695D',
  G900: '#12544A',

  R100: '#FCF3F3',
  R200: '#F3D0CE',
  R300: '#E9AAA6',
  R400: '#DE837D',
  R500: '#D45D56',
  R600: '#CB3A31',
  R700: '#AD312A',
  R800: '#902923',
  R900: '#74211C',

  Y100: '#FFF8E1',
  Y200: '#FFE899',
  Y300: '#FEDD67',
  Y400: '#FECD20',
  Y500: '#EAB601',
  Y600: '#B78F01',
  Y700: '#987701',
  Y800: '#7A5F01',
  Y900: '#473700',

  O100: '#FFF9F5',
  O200: '#FFBE8F',
  O300: '#FF974C',
  O400: '#FF8329',
  O500: '#F46700',
  O600: '#C25100',
  O700: '#8F3C00',
  O800: '#5C2700',
  O900: '#291100',

  B100: '#F7FFE5',
  B200: '#F0FFCC',
  B300: '#E8FFB2',
  B400: '#DBFF85',
  B500: '#5987EF',
  B600: '#BDFF1F',
  B700: '#A2E500',
  B800: '#0F3B9E',
  B900: '#0B2A70',

  N0: '#FFFFFF',
  N100: '#F2F2F2',
  N200: '#E6E6E6',
  N300: '#D9D9D9',
  N400: '#C2C2C2',
  N500: '#9E9E9E',
  N600: '#757575',
  N700: '#616161',
  N800: '#404040',
  N900: '#0A0A0A',
}

export const tokenConfig: ThemeConfig['token'] = {
  fontFamily: 'Inter, serif ',
  colorPrimary: '#9d0050',
  colorInfo: '#3e79f7',
  colorSuccess: '#04d182',
  colorError: '#ff6b72',
  colorBgLayout: '#F4F5FA',
  colorHighlight: '#ff6b72',
  colorWarning: '#ffc542',
  colorBorder: tokenGuidelines.N300,
  colorLink: '#C42127',
  controlHeight: 48,
  controlHeightSM: 40,
  controlHeightLG: 56,
  borderRadius: 8,
  // borderRadiusSM: 12,
  fontSize: 14,
  fontSizeSM: 10,
  fontSizeHeading1: 30,
  fontSizeHeading2: 22,
  fontSizeHeading3: 20,
  fontSizeHeading4: 17,
  fontSizeHeading5: 12,
  boxShadow: '0 1px 4px -1px rgba(0,0,0,.15)',
  paddingLG: 16,
}



export const componentsToken: ThemeConfig['components'] = {
  Button: {
    primaryShadow: '0 2px 0 rgba(0,0,0,0.045)',
    defaultShadow: '0 2px 0 rgba(0, 0, 0, 0.015)',
    fontWeight: '500',
  },
  Tabs: {
    cardPadding: '8px 0',
    cardGutter: 2,
    horizontalMargin: '0 32px 0 0',
    horizontalItemMargin: '0 32px 0 0',
  },
  DatePicker: {
    controlHeightSM: 24,
  },
  Menu: {
    itemMarginBlock: 0,
    itemMarginInline: 0,
    itemBorderRadius: 0,
    itemHeight: 68,
    itemSelectedBg: '#e20074',
    itemSelectedColor: '#9d0050',
    iconSize: 20,
    fontSize: 14,
    paddingContentHorizontal: 0,
  },
  Segmented: {
    colorBgLayout: 'rgba(0,0,0,.04)',
    borderRadiusSM: 10,
  },
  Pagination: {
    borderRadius: 12,
    colorPrimary: 'white',
    colorPrimaryHover: 'white',
    itemActiveBg: '#9d0050',
  },
  Tag: {
    lineWidth: 0,
  },
  Modal: {
    titleFontSize: 20,
  },
  Layout: {
    headerBg: 'white',
    headerPadding: 0,
    siderBg: 'white',
  },
  Form: {
    labelFontSize: 12,
    verticalLabelPadding: '0.25rem 0',
    labelColor: '#808191',
  },
  Descriptions: {
    colorTextSecondary: '#808191',
  },
  Switch: {
    colorPrimary: '#9d0050',
    colorPrimaryHover: '#e20074',
    handleSize: 28,
    trackHeight: 32,
    trackMinWidth: 96,
  },
  Calendar: {
    controlItemBgActive: 'transparent',
  },
  Checkbox: {
    colorBorder: '#818181',
    lineWidth: 2,
    colorBgContainer: '#fefefe',
    colorBgContainerDisabled: '#e1e1e1',
    colorFill: tokenConfig.colorPrimary
  },
  Typography: {
    margin: 0,
  },
  Table: {
    headerBg: tokenGuidelines.N100,
    headerBorderRadius: 12,
    headerColor: tokenGuidelines.N800,
    paddingMD: 16
  }
}

export const componentsConfig: ConfigProviderProps = {
  typography: {
    style: {
      display: 'block',
    },
  },
  modal: {
    styles: {
      header: {
        paddingBottom: '0.75rem',
        marginBottom: '1rem',
        borderBottom: '1px solid #e4e4e4',
      },
      content: { borderRadius: 16 },
      mask: {
        backdropFilter: 'blur(8px)',
      },
    },
  },
  space: {
    style: {
      width: '100%',
    },
  },
  datePicker: {
    style: {
      width: '100%',
    },
  },
  rangePicker: {
    style: {
      width: '100%',
    },
  },
  divider: {
    style: {
      margin: '48px 0',
    },
  },
  input: {
    style: {
      color: tokenGuidelines.N800,
      fontSize: '16px',
      height: '40px',
    },
  },
  select: {
    style: {
      color: tokenGuidelines.N800,
      height: '40px',
      fontSize: '16px',
    },
  },
  radio: {
    style: {
      fontSize: '16px',
      color: tokenGuidelines.N800,
    },
  },
  textArea: {
    style: {
      color: tokenGuidelines.N800,
      fontSize: '16px',
    },
  },
  button: {
    style: {
      fontSize: '16px',
    },
  },
}


export const appTheme: ThemeConfig = {
  token: tokenConfig,
  components: componentsToken,
  cssVar: true,
}