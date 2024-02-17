import React, { useState } from "react";
import "./RecordedVideos.css";

const RecordedVideos = ({ onBackClick }) => {
  const [videoList] = useState(() => [
    { id: 1, title: "Run", date: "2024-02-01", duration: "10:00", thumbnail: "https://via.placeholder.com/150" },
    { id: 2, title: "Gallop", date: "2024-02-02", duration: "12:30", thumbnail: "https://via.placeholder.com/150" },
    { id: 3, title: "Hop", date: "2024-02-03", duration: "15:45", thumbnail: "https://via.placeholder.com/150" },
    { id: 4, title: "Skip", date: "2024-02-04", duration: "8:20", thumbnail: "https://via.placeholder.com/150" },
    { id: 5, title: "Horizontal Jump", date: "2024-02-05", duration: "11:05", thumbnail: "https://via.placeholder.com/150" },
    { id: 6, title: "Slide", date: "2024-02-06", duration: "9:40", thumbnail: "https://via.placeholder.com/150" },
    { id: 7, title: "Two-hand Strike", date: "2024-02-07", duration: "14:15", thumbnail: "https://via.placeholder.com/150" },
    { id: 8, title: "One-hand Forehand", date: "2024-02-08", duration: "10:30", thumbnail: "https://via.placeholder.com/150" },
    { id: 9, title: "Dribble", date: "2024-02-09", duration: "13:20", thumbnail: "https://via.placeholder.com/150" },
    { id: 10, title: "Two-hand Catch", date: "2024-02-10", duration: "12:10", thumbnail: "https://via.placeholder.com/150" },
    { id: 11, title: "Kick", date: "2024-02-11", duration: "11:50", thumbnail: "https://via.placeholder.com/150" },
    { id: 12, title: "Overhand Throw", date: "2024-02-12", duration: "10:15", thumbnail: "https://via.placeholder.com/150" },
    { id: 13, title: "Underhand Throw", date: "2024-02-13", duration: "14:00", thumbnail: "https://via.placeholder.com/150" },
  ]);

  const videosPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videoList.slice(indexOfFirstVideo, indexOfLastVideo);

  const totalPages = Math.ceil(videoList.length / videosPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="recorded-videos">
      <button onClick={onBackClick} className="back-button">Back Button</button>
      <h2>Recorded Videos</h2>
      <div className="video-list">
        {currentVideos.map((video) => (
          <div key={video.id} className="video-item">
            <img
              className="video-thumbnail"
              src={video.thumbnail}
              alt={`Thumbnail for ${video.title}`}
            />
            <h3>{video.title}</h3>
            <p className="video-info">
              Date: {video.date} | Duration: {video.duration}
            </p>
          </div>
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RecordedVideos;