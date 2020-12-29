package dojo.java.dnin.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import dojo.java.dnin.model.Ninja;
import dojo.java.dnin.repo.NinjaRepo;

	@Service
	public class NinjaService {
		private final NinjaRepo repo;
		 
		public NinjaService(NinjaRepo repo) {
		     this.repo = repo;
		 }
		 public List<Ninja> allNinjas() {
		     return repo.findAll();
		 }
		 public Ninja createNinja(Ninja L) {
		     return repo.save(L);
		 }
		 public Ninja findNinja(Long id) {
		     Optional<Ninja> L = repo.findById(id);
		     if(L.isPresent()) {
		         return L.get();
		     } else {
		         return null;
		     }
		 }
		 public Ninja updateNinja(Ninja L) {
			 Ninja L1 = findNinja(L.getId());
			 L1 = L;
			 return repo.save(L1);
		 }
		 public void deleteNinja(Long id) {
			 repo.deleteById(id);		 
		 }
		 public List<Ninja> ninjaByDojo(Long id) {
		     List<Ninja> ninjas = repo.findByDojo_Id(id);
		    return ninjas;
		 }
//		 public List<Ninja> findNinjas(String c) {
//			 List<Ninja> creator = repo.findByCreatorContaining(c);
//			 return creator;
//		 }
}
