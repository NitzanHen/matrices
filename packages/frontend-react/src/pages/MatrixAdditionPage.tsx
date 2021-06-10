import React, { useEffect } from "react";
import { addMatrices } from "@matrices/common";

import { Equal } from "../components/svg/Equal";
import { Plus } from "../components/svg/Plus";
import { Matrix } from "../matrix/Matrix";
import { useMatrix } from "../matrix/useMatrix";
import { OperationPage } from './OperationPage';

/**
 * The page in which matrices can be summed up, rendered in path /matrix/sum.
 */
export const MatrixAdditionPage: React.VFC = () => {
  const matrix1 = useMatrix({ label: "A" });
  const matrix2 = useMatrix({ label: "B" });
  const sum = useMatrix({ label: "A+B", readonly: true });

  useEffect(() => {
    const result = addMatrices(matrix1.cells, matrix2.cells);
    if (result.ok) {
      sum.setCells(result.result);
    } else {
      sum.clear();
    }
  }, [matrix1.cells, matrix2.cells, sum.setCells, sum.clear]);

  return (
    <OperationPage>
      <Matrix {...matrix1.toProps()} />
      <Plus />
      <Matrix {...matrix2.toProps()} />
      <Equal />
      <Matrix {...sum.toProps()} />
    </OperationPage>

  );
};
