using Microsoft.EntityFrameworkCore.Migrations;

namespace Web_API.Migrations
{
    public partial class DB_v2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Card_Bar_column",
                table: "Card");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Card",
                table: "Card");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Bar",
                table: "Bar");

            migrationBuilder.DropColumn(
                name: "id",
                table: "Card");

            migrationBuilder.DropColumn(
                name: "id",
                table: "Bar");

            migrationBuilder.RenameColumn(
                name: "priority",
                table: "Card",
                newName: "Priority");

            migrationBuilder.RenameColumn(
                name: "name",
                table: "Card",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "column",
                table: "Card",
                newName: "Column");

            migrationBuilder.RenameIndex(
                name: "IX_Card_column",
                table: "Card",
                newName: "IX_Card_Column");

            migrationBuilder.RenameColumn(
                name: "name",
                table: "Bar",
                newName: "Name");

            migrationBuilder.AlterColumn<int>(
                name: "Priority",
                table: "Card",
                nullable: true,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Card",
                type: "varchar(150)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(150)",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "CardId",
                table: "Card",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Bar",
                type: "varchar(150)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(150)",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "BarId",
                table: "Bar",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Card",
                table: "Card",
                column: "CardId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Bar",
                table: "Bar",
                column: "BarId");

            migrationBuilder.InsertData(
                table: "Bar",
                columns: new[] { "BarId", "Name" },
                values: new object[] { 1, "To-do" });

            migrationBuilder.InsertData(
                table: "Bar",
                columns: new[] { "BarId", "Name" },
                values: new object[] { 2, "Ongoing" });

            migrationBuilder.InsertData(
                table: "Bar",
                columns: new[] { "BarId", "Name" },
                values: new object[] { 3, "Completed" });

            migrationBuilder.InsertData(
                table: "Card",
                columns: new[] { "CardId", "Column", "Name" },
                values: new object[] { 1, 1, "Test 1" });

            migrationBuilder.InsertData(
                table: "Card",
                columns: new[] { "CardId", "Column", "Name" },
                values: new object[] { 2, 2, "Test 2" });

            migrationBuilder.InsertData(
                table: "Card",
                columns: new[] { "CardId", "Column", "Name" },
                values: new object[] { 3, 3, "Test 3" });

            migrationBuilder.AddForeignKey(
                name: "FK_Card_Bar_Column",
                table: "Card",
                column: "Column",
                principalTable: "Bar",
                principalColumn: "BarId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Card_Bar_Column",
                table: "Card");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Card",
                table: "Card");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Bar",
                table: "Bar");

            migrationBuilder.DeleteData(
                table: "Card",
                keyColumn: "CardId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Card",
                keyColumn: "CardId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Card",
                keyColumn: "CardId",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Bar",
                keyColumn: "BarId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Bar",
                keyColumn: "BarId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Bar",
                keyColumn: "BarId",
                keyValue: 3);

            migrationBuilder.DropColumn(
                name: "CardId",
                table: "Card");

            migrationBuilder.DropColumn(
                name: "BarId",
                table: "Bar");

            migrationBuilder.RenameColumn(
                name: "Priority",
                table: "Card",
                newName: "priority");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Card",
                newName: "name");

            migrationBuilder.RenameColumn(
                name: "Column",
                table: "Card",
                newName: "column");

            migrationBuilder.RenameIndex(
                name: "IX_Card_Column",
                table: "Card",
                newName: "IX_Card_column");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Bar",
                newName: "name");

            migrationBuilder.AlterColumn<int>(
                name: "priority",
                table: "Card",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true,
                oldDefaultValue: 0);

            migrationBuilder.AlterColumn<string>(
                name: "name",
                table: "Card",
                type: "varchar(150)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "varchar(150)");

            migrationBuilder.AddColumn<int>(
                name: "id",
                table: "Card",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AlterColumn<string>(
                name: "name",
                table: "Bar",
                type: "varchar(150)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "varchar(150)");

            migrationBuilder.AddColumn<int>(
                name: "id",
                table: "Bar",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Card",
                table: "Card",
                column: "id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Bar",
                table: "Bar",
                column: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_Card_Bar_column",
                table: "Card",
                column: "column",
                principalTable: "Bar",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
