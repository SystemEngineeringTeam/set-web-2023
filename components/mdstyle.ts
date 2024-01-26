import { PatternConfig } from '@pandacss/dev';
import { mdStyles } from '@/const';

export const mdStyle: PatternConfig = {
  description: 'Markdown style',
  properties: {
    style: { type: 'enum', value: [...mdStyles] },
    maxWidth: { type: 'string' },
  },
  transform(props) {
    const { style } = props;

    if (style === 'no-style') return {};

    if (style === 'no-underline')
      return {
        width: '100%',
        overflowX: 'hidden',

        '& h1': {
          fontSize: '180%',
          fontWeight: 700,
          paddingBottom: '10px',
          marginTop: '40px',
          marginBottom: '10px',
        },

        '& h2': {
          fontSize: '150%',
          margin: '30px 0',
          marginBottom: '10px',
          fontWeight: 700,
          paddingBottom: '10px',
        },

        '& h3': {
          margin: '30px 0',
          marginBottom: '10px',
          fontSize: '125%',
          fontWeight: 700,
        },

        '& p': {
          margin: '20px 0',
        },

        '& a': {
          color: 'primary.300',
          textDecoration: 'none',
          transitionDuration: '0.3s',
        },

        '& img': {
          maxwidth: '100%',
          border: '1px solid #eee',
        },

        '& iframe': {
          maxWidth: '100%',
        },

        '& ul, ol': {
          margin: '20px 0',
        },

        '& ol': {
          listStyle: 'decimal',
        },

        '& ul': {
          paddingLeft: '2em',
          listStyle: 'inside',

          '& ul': {
            listStyleType: 'circle',
          },
        },

        '& pre > code': {
          display: 'block',
          padding: '10.5px',
          margin: '0 0 11px',
          fontSize: '13px',
          lineHeight: '1.6',
          color: '#333333',
          wordBreak: 'break-all',
          wordWrap: 'break-word',
          backgroundColor: '#f5f5f5',
        },

        '& table': {
          border: '1px solid rgba(0, 0, 0, 0.1)',
          width: '100%',
          borderCollapse: 'collapse',
          borderSpacing: 0,
          margin: '20px 0',
          marginBottom: '30px',

          '& th': {
            padding: '8px',
            lineHeight: '1.6',
            verticalAlign: 'top',
            border: '1px solid rgba(0, 0, 0, 0.1)',
          },

          '& td': {
            padding: '8px',
            lineHeight: '1.6',
            verticalAlign: 'top',
            border: '1px solid rgba(0, 0, 0, 0.1)',
          },

          '& tr:nth-child(odd) td': {
            backgroundColor: '#f9f9f9',
          },
        },
      };

    return {
      width: '100%',
      overflowX: 'hidden',

      '& h1': {
        fontSize: '180%',
        fontWeight: 700,
        borderBottom: '2px solid rgba(0, 0, 0, 0.1)',
        paddingBottom: '10px',
        marginTop: '40px',
        marginBottom: '10px',
      },

      '& h2': {
        fontSize: '150%',
        margin: '30px 0',
        marginBottom: '10px',
        fontWeight: 700,
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        paddingBottom: '10px',
      },

      '& h3': {
        margin: '30px 0',
        marginBottom: '10px',
        fontSize: '125%',
        fontWeight: 700,
      },

      '& p': {
        margin: '20px 0',
      },

      '& a': {
        color: 'primary.300',
        textDecoration: 'none',
        transitionDuration: '0.3s',
      },

      '& img': {
        maxwidth: '100%',
        border: '1px solid #eee',
      },

      '& iframe': {
        maxWidth: '100%',
      },

      '& ul, ol': {
        margin: '20px 0',
      },

      '& ol': {
        listStyle: 'decimal',
      },

      '& ul': {
        paddingLeft: '2em',
        listStyle: 'inside',

        '& ul': {
          listStyleType: 'circle',
        },
      },

      '& pre > code': {
        display: 'block',
        padding: '10.5px',
        margin: '0 0 11px',
        fontSize: '13px',
        lineHeight: '1.6',
        color: '#333333',
        wordBreak: 'break-all',
        wordWrap: 'break-word',
        backgroundColor: '#f5f5f5',
      },

      '& table': {
        border: '1px solid rgba(0, 0, 0, 0.1)',
        width: '100%',
        borderCollapse: 'collapse',
        borderSpacing: 0,
        margin: '20px 0',
        marginBottom: '30px',

        '& th': {
          padding: '8px',
          lineHeight: '1.6',
          verticalAlign: 'top',
          border: '1px solid rgba(0, 0, 0, 0.1)',
        },

        '& td': {
          padding: '8px',
          lineHeight: '1.6',
          verticalAlign: 'top',
          border: '1px solid rgba(0, 0, 0, 0.1)',
        },

        '& tr:nth-child(odd) td': {
          backgroundColor: '#f9f9f9',
        },
      },
    };
  },
};
