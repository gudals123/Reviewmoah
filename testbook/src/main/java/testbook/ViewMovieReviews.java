package testbook;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class ViewMovieReviews {

    public static void main(String[] args) {
        // 데이터베이스 연결 정보
    	String jdbcUrl = "jdbc:mysql://127.0.0.1:3306/jspdb";
        String dbUser = "root";
        String dbPassword = "passwd";

        try (Connection connection = DriverManager.getConnection(jdbcUrl, dbUser, dbPassword)) {
            viewMovieReviews(connection);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    private static void viewMovieReviews(Connection connection) {
        String sql = "SELECT * FROM movie_reviews";

        try (PreparedStatement preparedStatement = connection.prepareStatement(sql);
             ResultSet resultSet = preparedStatement.executeQuery()) {

            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                String reviewContent = resultSet.getString("review_content");
                String movieTitle = resultSet.getString("movie_title");
                String date = resultSet.getString("review_date");
                String posterSrc = resultSet.getString("poster_src");

                System.out.println("ID: " + id);
                System.out.println("Movie Title: " + movieTitle);
                System.out.println("Date: " + date);
                System.out.println("Poster Src: " + posterSrc);
                System.out.println("Review Content: " + reviewContent);
                System.out.println("\n");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
