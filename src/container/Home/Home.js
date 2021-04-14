import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadData } from "../../redux/Actions/table";
import { Table } from "../../components/table";

const Home = (props) => {
  useEffect(() => {
    props.loadData();
  }, []);

  return (
    <Table data={props.data} loading={props.loading} error={props.error} />
  );
};

const mapStateToProps = (state) => ({
  data: state.table.data,
  loading: state.table.loading,
  error: state.table.error,
});

const mapDispatchToProps = {
  loadData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
