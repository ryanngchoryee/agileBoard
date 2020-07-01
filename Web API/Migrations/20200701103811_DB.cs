using Microsoft.EntityFrameworkCore.Migrations;

namespace Web_API.Migrations
{
    public partial class DB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Bar",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "0, 1"),
                    name = table.Column<string>(type: "varchar(150)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Bar", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Card",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "0, 1"),
                    name = table.Column<string>(type: "varchar(150)", nullable: false),
                    priority = table.Column<int>(nullable: true, defaultValue: 0),
                    column = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Card", x => x.id);
                    table.ForeignKey(
                        name: "FK_Card_Bar_column",
                        column: x => x.column,
                        principalTable: "Bar",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Card_column",
                table: "Card",
                column: "column");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Card");

            migrationBuilder.DropTable(
                name: "Bar");
        }
    }
}
