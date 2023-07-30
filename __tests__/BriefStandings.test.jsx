import BriefStandings from "../app/components/BriefStandings";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

describe("BriefStandings Rendering", () => {
    it("should render title: Standings", async () => {
    render(await BriefStandings());
    expect(screen.getByText("Standings")).toBeInTheDocument();
    }),
    it("should render 5 buttons: Driver Standings, Constructor Standings, carrots, and full standings for driver", async () => {
        render(await BriefStandings());
        expect(screen.getAllByRole("button")).toHaveLength(5);
    });
    it("should render the first 3 drivers but no teams", async () => {
        render(await BriefStandings());
        expect(screen.getByText("Verstappen")).toBeInTheDocument();
        expect(screen.queryByText("Red Bull")).not.toBeInTheDocument();
    });
    it("should render the first 3 teams after button click: Constructor Standings", async () => {
        render(await BriefStandings());
        expect(screen.queryByText("Red Bull")).not.toBeInTheDocument();
        await userEvent.click(screen.getByText("Constructor Standings"))
        expect(screen.getByText("Red Bull")).toBeInTheDocument();
        expect(screen.queryByText("Williams")).not.toBeInTheDocument();
    });
});
