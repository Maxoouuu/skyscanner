import * as React from "react";
import { SearchFlights } from "../components/SearchFlights";

interface Props {}

interface State {
  origin: string;
  destination: string;
  date: string;
  isLoading: boolean;
  flights: any[];
  error: boolean;
}

class FlightSearchForm extends React.Component<Props, State> {
  state = {
    origin: "",
    destination: "",
    date: new Date().toISOString().split("T")[0],
    isLoading: false,
    flights: [],
    error: false,
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "origin") {
      this.setState({ origin: event.target.value });
    } else if (event.target.name === "destination") {
      this.setState({ destination: event.target.value });
    } else if (event.target.name === "date") {
      this.setState({ date: event.target.value });
    }
  };

  handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.setState({ isLoading: true });
    this.setState({ error: false });
    const searchResults = await SearchFlights(this.state);
    this.setState({ isLoading: false });

    if (!searchResults.status) {
      this.setState({ error: true });
    } else {
      this.setState({
        flights: searchResults["data"].sort(
          (a: any, b: any) => a.price.amount - b.price.amount
        ),
      });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Départ:
            <input
              type="text"
              name="origin"
              value={this.state.origin}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Arrivée:
            <input
              type="text"
              name="destination"
              value={this.state.destination}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Date:
            <input
              type="date"
              name="date"
              value={this.state.date}
              min={this.state.date}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Rechercher" />
        </form>
        <div>
          {this.state.isLoading && <p>Recherche en cours</p>}
          {this.state.error && <p>La recherche a échoué.</p>}
          {this.state.flights &&
            this.state.flights.map((result: any) => (
              <div key={result.id}>
                <p>
                  Départ: {new Date(result.legs[0].departure).toISOString()}
                </p>
                <p>Arrivée: {new Date(result.legs[0].arrival).toISOString()}</p>
                <p>Prix: {result.price.amount} €</p>
                <p>Compagnie: {result.legs[0].carriers[0].name}</p>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default FlightSearchForm;
