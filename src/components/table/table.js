import React from "react";
import * as S from "./table.styles";
const Table = (props) => {
  if (props.loading) {
    return <S.Loading />;
  }

  if (props.error) {
    return <S.Error>ERROR: {props.error}</S.Error>;
  }
  console.log("props", props);
  return (
    <S.Table>
      <S.TableHead>
        <S.TableRow>
          <S.TableHeading>Scrip </S.TableHeading>
          <S.TableHeading>Quantity </S.TableHeading>
          <S.TableHeading>Price </S.TableHeading>
          <S.TableHeading>Avg. Cost</S.TableHeading>
          <S.TableHeading>Invested Amount</S.TableHeading>
          <S.TableHeading>% of Portfolio Value</S.TableHeading>
          <S.TableHeading>Unrealized P&amp;L</S.TableHeading>
          <S.TableHeading>%Return</S.TableHeading>
        </S.TableRow>
      </S.TableHead>
      <S.TableBody>
        {props.data?.map((value) => {
          debugger;
          return (
            <S.TableRow key={value.id}>
              <S.TableData>{value.scrip}</S.TableData>
              <S.TableData>{value.quantity}</S.TableData>
              <S.TableData>{value.price}</S.TableData>
              <S.TableData>{value.avgCost}</S.TableData>

              <S.TableData>{value.investedAmount}</S.TableData>

              <S.TableData>{value.portfolio}</S.TableData>

              <S.TableData>{value.unrealize}</S.TableData>

              <S.TableData>{value.return}</S.TableData>
            </S.TableRow>
          );
        })}
      </S.TableBody>
    </S.Table>
  );
};

export default Table;
