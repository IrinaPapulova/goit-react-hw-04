import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { fetchImagesWithTopic } from "../../images-api";

import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";

import css from "./App.module.css";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [description, setDescription] = useState(null);

  const openModal = (bigImg, alt) => {
    setSelectedImage(bigImg);
    setDescription(alt);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setDescription(null);
    setModalIsOpen(false);
  };

  const handleSearch = async (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function getImages() {
      try {
        setIsLoading(true);
        const data = await fetchImagesWithTopic(query, page);
        setImages((prevImages) => {
          return [...prevImages, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getImages();
  }, [page, query]);

  return (
    <div className={css.app}>
     
      <SearchBar onSearch={handleSearch} />
      
      {error && <ErrorMessage />}

      {images.length > 0 && (
        <ImageGallery listImages={images} openModal={openModal} />
      )}

      <ImageModal
        isOpen={modalIsOpen}
        modalImg={selectedImage}
        alt={description}
        closeModal={closeModal}
      />

      {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}

      {isLoading && <Loader />}

      <Toaster />
    </div>
  );
}
