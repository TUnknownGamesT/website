import "/Unknown/Website/client-app/src/css/GridContent.css";
import { Button, Grid, GridColumn, GridRow } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

interface Props {
  id: string;
  title: string;
  urlTrailar: string;
  urlPlay: string;
  tags: string[];
  relased: boolean;
}

export default function ContentItem(Props: Props) {
  return (
    <div className="content-container">
      <Grid centered className="layout" key={Props.id}>
        <GridRow className="layout">
          <GridColumn className="content">
            <h1 className="game-title">{Props.title}</h1>
          </GridColumn>
        </GridRow>
      </Grid>
      <div className="overlay"></div>
      <video src={Props.urlTrailar} autoPlay loop muted className="video" />
      <ul className="description">
        <li>
          <div className="grid-container">
            {Props.tags.map((tag) => (
              <div className="grid-item">{tag}</div>
            ))}
          </div>
        </li>
        <li>
          {Props.relased ? (
            <Button
              className="play-button"
              color="black"
              as="a"
              href={Props.urlPlay}
            >
              <h1 className="button-content">Play</h1>
            </Button>
          ) : (
            <Button className="play-button" color="black">
              <h1 className="button-content">Comming Soon</h1>
            </Button>
          )}
        </li>
      </ul>
    </div>
  );
}
