export default {
  default: {
    'button' : {
      backgroundColor: 'transparent',
      border: 0,
      padding: '0 10px',
      fontSize: '20px',

      '&:hover': {
        cursor: 'pointer'
      }
    },

    svg: {
      margin: '0 10px'
    }
  },

  grid: {
    border: '1px solid #ddd',
    width: '100%',
    textAlign: 'left',
    padding: '10px',
    borderCollapse: 'collapse',

    '> thead': {
      fontSize: '20px',

      th: {
        padding: '15px 10px'
      },

      'tr, th': {
        fontSize: '16px',
        textTransform: 'capitalize',
        fontWeight: 'normal'
      },
    },

    'th, td': {
      padding: '8px',
      textAlign: 'left',
      borderBottom: '1px solid #ddd'
    },

    tbody: {
      color: '#000',

      tr: {
        '&:hover' : {
          backgroundColor: '#f5f5f5'
        },

        '&[data-row-selected="true"]': {
          backgroundColor: '#f5f5f5'
        },

        td: {
          padding: '10px',
          fontSize: '14px'
        }
      }
    }
  },

  grid_actions: {
    padding: '10px',
    textAlign: 'left',

    '> div': {
      fontSize: '20px',
      display: 'inline-block',
      padding: '10px 10px 10px 0',
      textTransform: 'capitalize'
    }
  },

  available: {
    display: 'inline-block',
    width: '15px',
    height: '15px',
    backgroundColor: '#83C63C',
    borderRadius: '50%',
    marginRight: '10px',
    marginLeft: '-25px'
  },

  status: {
    textTransform: 'capitalize'
  }
}
