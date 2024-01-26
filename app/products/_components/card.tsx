'use client';

import { useState } from 'react';
import { OpenInNewIcon } from '@/components/icons';
import Thumbnail from '@/components/thumbnail';
import { formatdate, toOpen } from '@/components/util';
import { DEFAULT_PRODUCT_THUMBNAIL } from '@/const';
import { css } from '@/styled-system/css';
import { Product } from '@/types';

export default function Card({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={css({
        boxShadow: '4px 2px 10px -5px #777777',
        borderRadius: '5px',
        cursor: 'pointer',
      })}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => product.link && toOpen(product.link)}
    >
      <Thumbnail
        src={product.thumbnail || DEFAULT_PRODUCT_THUMBNAIL}
        alt={product.title}
        hovered={hovered}
        height="150px"
      />
      <div
        className={css({
          padding: '10px 20px',
          position: 'relative',
        })}
      >
        {product.link && (
          <OpenInNewIcon
            className={css({
              fontSize: '1.5rem',
              position: 'absolute',
              right: '10px',
              top: '10px',
            })}
          />
        )}
        <h3
          className={css({
            width: 'calc(100% - 20px)',
            fontSize: '1.4rem',
            fontWeight: 'bold',
            lineHeight: '1.7rem',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          })}
        >
          {product.title}
        </h3>
        <p
          className={css({
            fontSize: '1rem',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          })}
        >
          {product.description}
        </p>
        <div
          className={css({
            paddingTop: '10px',
          })}
        >
          <p>{product.author}</p>
          <p
            className={css({
              textAlign: 'end',
            })}
          >
            {formatdate(product.created_at)}
          </p>
        </div>
        {/* <div>
          <span
            className={css({
              fontWeight: "bold",
              lineHeight: "2.5rem",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            })}
          >
            {product.author}
          </span>
          <span
            className={css({
              display: "inline-block",
              marginInline: "auto",
            })}
          />
          <span
            className={css({
              padding: "0 10px",
              lineHeight: "1.5rem",
              textAlign: "end",
              overflow: "hidden",
              overflowWrap: "break-word",
            })}
          >
            {formatdate(product.created_at)}
          </span>
        </div> */}
      </div>
    </div>
  );
}
