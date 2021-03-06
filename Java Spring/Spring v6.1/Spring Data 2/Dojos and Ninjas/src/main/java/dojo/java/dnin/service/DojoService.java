package dojo.java.dnin.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import dojo.java.dnin.model.Dojo;
import dojo.java.dnin.model.Ninja;
import dojo.java.dnin.repo.DojoRepo;

@Service
public class DojoService {
	private final DojoRepo repo;
	 
	public DojoService(DojoRepo repo) {
	     this.repo = repo;
	 }
	 public List<Dojo> allDojos() {
	     return repo.findAll();
	 }
	 public Dojo createDojo(Dojo L) {
	     return repo.save(L);
	 }
	 public Dojo findDojo(Long id) {
	     Optional<Dojo> L = repo.findById(id);
	     if(L.isPresent()) {
	         return L.get();
	     } else {
	         return null;
	     }
	 }

	 public Dojo updateDojo(Dojo L) {
		 Dojo L1 = findDojo(L.getId());
		 L1 = L;
		 return repo.save(L1);
	 }
	 public void deleteDojo(Long id) {
		 repo.deleteById(id);		 
	 }
//		 public List<Dojo> findDojos(String c) {
//			 List<Dojo> creator = repo.findByCreatorContaining(c);
//			 return creator;
//		 }
}
