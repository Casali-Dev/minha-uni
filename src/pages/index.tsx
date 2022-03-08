import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { UniversitiesTable } from "../components/UniversitiesTable";

import { Container, Footer } from "../styles/home";

export default function Home() {
  return (
    <>
      <Head>
        <title>MinhaUni</title>
        <meta
          name="description"
          content="Lista de universidades e faculdades de todo o Brasil!"
        />
      </Head>

      <Container>
        <Header />

        <main>
          <UniversitiesTable />
        </main>
      </Container>

      <Footer>
        <h3>Criado com 💜 por Guilherme Casali</h3>
      </Footer>
    </>
  );
}
