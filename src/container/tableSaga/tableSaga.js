import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadUsers } from "../../redux/Actions/actions";
import { Table } from "../../components/table";

const TableSaga = (props) => {
  useEffect(() => {
    props.loadUsers();
  }, []);

  return (
    <Table data={props.data} loading={props.loading} error={props.error} />
  );
};

const mapStateToProps = (state) => ({
  data: state.reduxSaga.data,
  loading: state.reduxSaga.loading,
  error: state.reduxSaga.error,
});

const mapDispatchToProps = {
  loadUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(TableSaga);
