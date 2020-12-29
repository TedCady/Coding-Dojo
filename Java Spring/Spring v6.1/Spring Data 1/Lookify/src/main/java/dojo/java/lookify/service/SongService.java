package dojo.java.lookify.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import dojo.java.lookify.model.Song;
import dojo.java.lookify.repo.SongRepo;

	@Service
	public class SongService {
		private final SongRepo repo;
		 
		public SongService(SongRepo repo) {
		     this.repo = repo;
		 }
		 public List<Song> allSongs() {
		     return repo.findAll();
		 }
		 public Song createSong(Song L) {
		     return repo.save(L);
		 }
		 public Song findSong(Long id) {
		     Optional<Song> L = repo.findById(id);
		     if(L.isPresent()) {
		         return L.get();
		     } else {
		         return null;
		     }
		 }
		 public Song updateSong(Song L) {
			 Song L1 = findSong(L.getId());
			 L1 = L;
			 return repo.save(L1);
		 }
		 public void deleteSong(Long id) {
			 repo.deleteById(id);		 
		 }
		 public List<Song> findCreator(String c) {
			 List<Song> creator = repo.findByCreatorContaining(c);
			 return creator;
		 }
}
