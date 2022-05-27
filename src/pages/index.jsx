import React from "react";
import Layout from "../components/layout/Layout";
import Hero from "../components/homepage/Hero";
import SearchBar from "../components/search/SearchBar";
import CardResult from "../components/card/CardResult";
import { Container } from "react-bootstrap";
import Store from "../store/store";

export default function Home() {
  return (
    <div>
      <Layout>
        <Hero />
        <SearchBar />
        <Container>
          <CardResult store={{ Store }} />
        </Container>
      </Layout>
    </div>
  );
}
