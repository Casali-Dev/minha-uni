import styled from "styled-components";

export const Container = styled.div`
  table {
    max-width: 90vw;
    min-width: 80rem;
    text-align: center;
    border: none;
    border-radius: 1rem;
    background-color: #d0ccff;

    filter: drop-shadow(0 0 5px #c7c6fb);

    tbody {
      tr {
        height: 4rem;
        transition: filter 0.2s ease;

        &:hover {
          filter: brightness(0.95);
        }

        &:nth-child(odd) {
          background-color: #f0f0ff;
        }
        &:nth-child(even) {
          background-color: #f7f6fb;
        }
        &:last-child {
          td {
            &:first-child {
              border-radius: 0 0 0 1rem;
            }
            &:last-child {
              border-radius: 0 0 1rem 0;
            }
          }
        }
      }
    }

    th {
      padding: 0.3rem;
      width: 8rem;
      height: 2rem;
      background-color: #5f00db;
      color: #ffffff;

      &:first-child {
        border-radius: 1rem 0 0 0;
      }

      &:last-child {
        border-radius: 0 1rem 0 0;
      }
    }

    td {
      p {
        padding: 0.5rem 0.75rem;
      }
    }

    .uniName {
      width: 30rem;
      text-align: start;
    }

    .uniInitial {
      width: 10rem;
    }
  }

  input,
  select {
    margin: 0.3rem 0;
    padding: 0.3rem 0.5rem;

    width: 75%;
    border: none;
    border-radius: 0.3rem;
    color: black;

    font-family: "Roboto", sans-serif;

    /* background-color: red; */
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem 3rem;
  justify-content: space-between;
  text-align: center;

  button {
    cursor: pointer;
    width: 3rem;
    height: 3rem;
    border: none;
    border-radius: 50%;
    background-color: #5f00db;
    font-size: 2rem;
    color: #f0f0ff;

    transition: filter 0.6s ease;

    &:disabled {
      filter: grayscale(1) opacity(0.2);
      cursor: not-allowed;
    }

    &:hover {
      filter: brightness(1.3);
    }
  }
`;
