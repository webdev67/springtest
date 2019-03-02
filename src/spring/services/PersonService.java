package services;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.transaction.HeuristicMixedException;
import javax.transaction.HeuristicRollbackException;
import javax.transaction.RollbackException;
import javax.transaction.SystemException;
import javax.transaction.Transaction;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

import beans.Person;

public class PersonService {
	private EntityManager em;
	public PersonService(EntityManager em) {
		this.em = em;
	}
	public void doSave(Person p) {
		Session s = this.em.unwrap(Session.class);
		org.hibernate.Transaction tx = s.beginTransaction();
		s.persist(p);
		tx.commit();
		s.close();
	}
}
