package mace.dojo_overflow.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import mace.dojo_overflow.models.Answer;
import mace.dojo_overflow.models.Question;
import mace.dojo_overflow.models.Tag;
import mace.dojo_overflow.repositories.AnswerRepository;
import mace.dojo_overflow.repositories.QuestionRepository;
import mace.dojo_overflow.repositories.TagRepository;

@Service
public class Services {
	private final QuestionRepository questionRepo;
	private final TagRepository tagRepo;
	private final AnswerRepository answerRepo;
	
	public Services(QuestionRepository questionRepo, TagRepository tagRepo, AnswerRepository answerRepo) {
		this.questionRepo = questionRepo;
		this.tagRepo = tagRepo;
		this.answerRepo = answerRepo;
	}
	
//	CREATE
	public Question createQuestion(Question question) {
		return questionRepo.save(question);
	}	
	public Tag createTag(Tag tag) {
		return tagRepo.save(tag);
	}
	public Answer createAnswer(Answer answer) {
		return answerRepo.save(answer);
	}
	public List<Tag> createTags(String _tags){
		String[] sTags = _tags.split(",");
		List<Tag> tags = new ArrayList<Tag>();
		for(int i = 0; i < sTags.length; i++) {
			sTags[i] = sTags[i].toLowerCase().trim();
			Optional<Tag> check = tagRepo.findByTagIs(sTags[i]);
			if(check.isPresent()) {
				tags.add(check.get());
			}
			else {
				Tag newTag = new Tag();
				newTag.setTag(sTags[i]);
				createTag(newTag);
				long tagRepoSize = tagRepo.findAll().size();
				newTag = getTag(tagRepoSize);
				tags.add(newTag);
			}
		}
		return tags;
	}
//	READ ID
	public Question getQuestion(Long id) {
		Optional<Question> getQuestion = questionRepo.findById(id);
		if(getQuestion.isPresent()) {
			return getQuestion.get();
		}
		else {return null;}
	}
	public Tag getTag(Long id) {
		Optional<Tag> getTag = tagRepo.findById(id);
		if(getTag.isPresent()) {
			return getTag.get();
		}
		else {return null;}
	}
	public Answer getAnswer(Long id) {
		Optional<Answer> getAnswer = answerRepo.findById(id);
		if(getAnswer.isPresent()) {
			return getAnswer.get();
		}
		else {return null;}
	}	

//	READ STRING
	public Question getQuestion(String question) {
		Optional<Question> getQuestion = questionRepo.findByQuestionIs(question);
		if(getQuestion.isPresent()) {
			return getQuestion.get();
		}
		else {return null;}
	}
	public Tag getTag(String question) {
		Optional<Tag> getTag = tagRepo.findByTagIs(question);
		if(getTag.isPresent()) {
			return getTag.get();
		}
		else {return null;}
	}
	
//	READ ALL
	public List<Question> getAllQuestions(){
		return questionRepo.findAll();
	}

	
//	UPDATE
	public Question updateQuestion(Question _question) {
		Optional<Question> question = questionRepo.findById(_question.getId());
		if(question.isPresent()) {
			Question q = question.get();
			q = _question;
			return questionRepo.save(q);			
		}
		else {
			return null;
		}
	}
	
//	DELETE
	
}
