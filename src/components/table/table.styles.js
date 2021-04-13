import styled from "styled-components";
import tw from "twin.macro";

const Table = styled.table`
  ${tw`p-3 border-2 border-black border-collapse`}
`;
const TableData = styled.td`
  ${tw`p-3 border-2 border-black border-collapse text-right`}
`;
const TableHead = styled.thead``;
const TableRow = styled.tr``;
const TableHeading = styled.th`
  ${tw`p-3 border-2 border-black border-collapse`}
`;
const TableBody = styled.tbody``;

const Error = styled.div`
  ${tw`text-red-500`}
`;
const Loading = styled.div`
  ${tw`border-t-4 border-blue-500 rounded-full w-20 h-20`}

  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export {
  Table,
  TableData,
  TableHead,
  TableRow,
  TableHeading,
  TableBody,
  Error,
  Loading,
};
