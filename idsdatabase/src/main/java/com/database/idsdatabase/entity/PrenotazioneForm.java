package com.database.idsdatabase.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.database.idsdatabase.entity.Donazione;

@Entity
public class PrenotazioneForm{
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id;

    private String centro;

    private String compleanno;

    private String telefono;

    private String statosalute;

    private String note;

   
    
    public PrenotazioneForm(){

    }

    public PrenotazioneForm(final long id, final String centro, final String compleanno, final String telefono, final String statosalute, final String note){
        this.id = id;
        this.centro = centro;
        this.compleanno = compleanno;
        this.telefono = telefono;
        this.statosalute = statosalute;
        this.note = note;
    }
    public long getid() {
  return id;
 }

 public void setid(final Long id) {
  this.id = id;
 }

    public String getcentro() {
        return centro;
    }
    
    public void setcentro(final String centro) {
        this.centro = centro;
    }

    public String getcompleanno() {
        return compleanno;
    }
    
    public void setcompleanno(final String compleanno) {
        this.compleanno = compleanno;
    }

    public String gettelefono() {
        return telefono;
    }
    
    public void settelefono(final String telefono) {
        this.telefono = telefono;
    }

    public String getnote() {
        return note;
    }
    
    public void setnote(final String note) {
        this.note = note;
    }

    
    public String getstatosalute() {
        return statosalute;
    }
    
    public void setstatosalute(final String statosalute) {
        this.statosalute = statosalute;
    }

    @Override
 public String toString(){
        return "" + id + "" + centro + "" + compleanno + "" + telefono + "" + statosalute + "" + note;
        
    }

    


}