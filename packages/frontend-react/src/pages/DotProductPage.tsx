import { CellValue, dotProduct, generateVector } from '@matrices/common';
import React, { useEffect, useState } from 'react';

import { Equal } from '../components/svg/Equal';
import { Cell } from '../matrix/Cell';
import { Matrix } from '../matrix/Matrix';

import { useMatrix } from '../matrix/useMatrix';

import { OperationPage } from './OperationPage';

export const DotProductPage: React.VFC = () => {
  const vector1 = useMatrix({
    label: 'u',
    unresizable: true,
    defaultCells: [generateVector(3, () => undefined)]
  })

  const vector2 = useMatrix({
    label: 'v',
    unresizable: true,
    defaultCells: [generateVector(3, () => undefined)]
  })

  const product = useMatrix({
    label: 'u·v',
    readonly: true,
    unresizable: true,
    defaultCells: [[undefined]]
  })

  const { setCells: setProductCells, clear: clearProduct } = product;
  useEffect(() => {
    const [v1] = vector1.cells;
    const [v2] = vector2.cells;

    const result = dotProduct(v1, v2);
    if (result.ok) {
      setProductCells([[result.result]]);
    }
    else {
      clearProduct();
    }
  }, [vector1.cells, vector2.cells,])

  return (
    <OperationPage>
      <Matrix {...vector1.toProps()} />
      <Matrix {...vector2.toProps()} />
      <Equal />
      <Matrix {...product.toProps()} />
    </OperationPage>
  )
};