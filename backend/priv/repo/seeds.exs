# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Backend.Repo.insert!(%Backend.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.


%Backend.Images.Image{}
  |> Backend.Images.Image.changeset(%{
    url: "https://www.reactiongifs.us/wp-content/uploads/2013/07/its_working_star_wars.gif",
  })
  |> Backend.Repo.insert!()
